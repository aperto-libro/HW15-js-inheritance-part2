class Clock {
  constructor(elem) {
    this.isFullFormat = false;
    this.currentTime = elem;
    this.currentTime.addEventListener('click', () => {
      this.toggle();
    });
  }

  getTime() {
    let now = new Date();
    let hours = correctTime(now.getHours());
    let minutes = correctTime(now.getMinutes());
    let seconds = correctTime(now.getSeconds());
    let miliseconds = correctTime(now.getMilliseconds());
    return [hours, minutes, seconds, miliseconds];
  }

  timeFormat() {
    let shortFormat = `${this.getTime()[0]} : ${this.getTime()[1]}`;
    let fullFormat = `${this.getTime()[0]} : ${this.getTime()[1]} : ${this.getTime()[2]}`;
    return this.isFullFormat === true ? fullFormat : shortFormat;
  }

  render() {
    this.currentTime.innerHTML = this.timeFormat();
  }

  startClock() {
    setInterval(() => this.render(), 250);
  }

  toggle() {
    this.isFullFormat = !this.isFullFormat;
  }
}

class firstClock extends Clock {
  timeFormat() {
    let shortFormat = `${this.getTime()[0]} . ${this.getTime()[1]} . ${this.getTime()[2]}`;
    let fullFormat = `${this.getTime()[0]} . ${this.getTime()[1]} . ${this.getTime()[2]} . ${
      this.getTime()[3]
    }`;
    return this.isFullFormat === true ? fullFormat : shortFormat;
  }
}

class secondClock extends Clock {
  timeFormat() {
    let shortFormat = `${this.getTime()[0]} ' ${this.getTime()[1]}`;
    let fullFormat = `${this.getTime()[0]} ' ${this.getTime()[1]} ' ${this.getTime()[2]} ' ${
      this.getTime()[3]
    }`;
    return this.isFullFormat === true ? fullFormat : shortFormat;
  }
}

function correctTime(value) {
  return value < 10 ? '0' + value : value;
}

const time = document.getElementById('clock');
let clock = new Clock(time);
clock.startClock();

const time1 = document.getElementById('clock1');
let clock1 = new firstClock(time1);
clock1.startClock();

const time2 = document.getElementById('clock2');
let clock2 = new secondClock(time2);
clock2.startClock();
