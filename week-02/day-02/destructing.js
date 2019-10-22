'use strict';

/* eslint-disable prefer-destructuring */
const myCar = {
  model: 'Benz',
  color: 'black',
  year: 1886,
  doors: 0,
  historical: true,
};

const myComputer = {
  type: 'PC',
  monitor: {
    color: 'black',
    size: '16"',
    HDMI: true,
    VGA: true,
  },
  tower: {
    color: 'grey',
    CPU: 4.7,
    memory: 16,
    SSD: 128,
  },
};

const destructingCarES6 = (car) => {
  const {
    model, color, year, doors, historical,
  } = car;
  console.log(model, color, year, doors, historical);
};

const destructingCarES5 = (car) => {
  const model = car.model;
  const color = car.color;
  const year = car.year;
  const doors = car.doors;
  const historical = car.historical;
  console.log(model, color, year, doors, historical);
};

destructingCarES6(myCar);
destructingCarES5(myCar);

const destructingComputerES6 = (computer) => {
  const {
    type,
    monitor: {
      color: monitorColor,
      size,
      HDMI,
      VGA,
    },
    tower: {
      color: towerColor, // aliasing towerColor = .tower.color
      CPU,
      memory,
      SSD,
    },
  } = computer;
  console.log(type, monitorColor, size, HDMI, VGA, towerColor, CPU, memory, SSD);
};


const destructingComputerES5 = (computer) => {
  const type = computer.type;
  const monitorColor = computer.monitor.color;
  const size = computer.monitor.size;
  const HDMI = computer.monitor.HDMI;
  const VGA = computer.monitor.VGA;
  const towerColor = computer.tower.color;
  const CPU = computer.tower.CPU;
  const memory = computer.tower.memory;
  const SSD = computer.tower.SSD;
  console.log(type, monitorColor, size, HDMI, VGA, towerColor, CPU, memory, SSD);
};


destructingComputerES6(myComputer);
destructingComputerES5(myComputer);
