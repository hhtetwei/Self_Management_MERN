import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const transformDate = (createdAt) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  if (createdAt === '') {
    return createdAt;
  }

  const year = dayjs(createdAt).utc().get('years');
  const month = dayjs(createdAt).utc().get('months');
  let day = dayjs(createdAt).utc().get('dates');

  if (day < 10) {
    day = `0${day}`;
  }

  return `${months[month]} ${day},  ${year}`;
};

export const transformTime = (createdAt) => {
  if (createdAt === '') {
    return createdAt;
  }

  let hour = dayjs(createdAt).utc().get('hours');
  let minute = dayjs(createdAt).utc().get('minutes');

  let time = 'AM';

  if (hour > 12) {
    hour = hour - 12;
    time = 'PM';
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `${hour}:${minute} ${time}`;
};
