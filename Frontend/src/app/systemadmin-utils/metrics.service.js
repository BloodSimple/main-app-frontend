import { timerService } from '@/_services/timer.service';


const sendTimeInMS = true;
const msIn1Sec = 1000;
const unitMS = 'ms';
const unitSec = 's';

const metricsEndpoint = ''; //CloudWatchProxy endpoin - videti na AWS-u

//imamo 2 tipa event-ova : timed eventove, za koje se racuna vreme i to vreme se salje na AWS
// i error eventove, eventove za koje se ne poziva timer servis vec ih odmah saljemo na AWS
const EVENTS = {
    // ovde bismo naveli dogadjadjaje koje monitoruejmo npr. 
    // LOGIN: 'login',
    // FIRST_LOGIN: 'first-login',
};

//namespace sa AWS CloudWatch-a, ime metrike, vrednost u ms
function sendMetricsToAWS(nameSpace, metricName, metricValue) {
    const requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(
            {
                'x-NameSpace': nameSpace,
                'x-MetricName': metricName,
                'x-MetricValue': metricValue,
                'x-ApiKey': process.env.VUE_APP_METRICS_API_KEY,    // od AWS-a
            },
        ),
    };

    fetch(metricsEndpoint, requestOptions);
}

function sendMetric(nameSpace, metricName, value, unit) {
    sendMetricsToAWS(nameSpace, metricName, value);
}

function createVueErrorEvent(err, vm, info) {
    sendMetricsToAWS(cloudwatchVueEventErrorNameSpace, this.EVENTS.VUE_GLOBAL_ERROR_HANDLER_EVENT, `${err} * ${vm} * ${info}`);
}

function createRegularErrorEvent(msg, url, line, col, error) {
    // eslint-disable-next-line max-len
    sendMetricsToAWS(cloudwatchRegularEventErrorNameSpace, this.EVENTS.VUE_GLOBAL_ERROR_HANDLER_EVENT, `${msg} * ${url} * ${line} * ${col} * ${error}`);
}


//merimo trajanje eventa
function startTimedEvent(name, nameSpace = cloudwatchEventDefaultNameSpace) {
    timerService.startTimer(`${nameSpace}:${name}`);
}

//prekidamo merenje eventa
function cancelTimedEvent(name, nameSpace = cloudwatchEventDefaultNameSpace) {
    timerService.stopTimer(`${nameSpace}:${name}`);
}


//prekidamo merenje i racunamo trajanje
function stopTimerGetDurationUnit(name, nameSpace = cloudwatchEventDefaultNameSpace) {
    let duration = 0;
    let unit = unitMS;
    if (sendTimeInMS) {
        duration = (timerService.stopTimer(`${nameSpace}:${name}`)).toFixed(2);
    } else {
        unit = unitSec;
        duration = (timerService.stopTimer(`${nameSpace}:${name}`) / msIn1Sec).toFixed(2);
    }
    return { duration, unit };
}


//zavrsavamo timed event
function endTimedEvent(name, nameSpace = cloudwatchEventDefaultNameSpace) {
    if (!timerService.isTimerRunning(`${nameSpace}:${name}`)) {
        return;
    }

    const { duration, unit } = stopTimerGetDurationUnit(name, nameSpace);

    sendMetric(nameSpace, name, duration, unit);
}



