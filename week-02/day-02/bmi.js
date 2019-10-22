function calculateBMI(bodyInfo) {
  return {
    ...bodyInfo,
    bmi: bodyInfo.weight / (bodyInfo.height ** 2),
  };
}

module.exports = { calculateBMI };
