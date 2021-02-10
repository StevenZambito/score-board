function main() {
  let teamOnePoints = 0
  let teamTwoPoints = 0

  const declareWinner = () => {
    if (teamOnePoints === 21) {
      document.querySelector('.hide').style.display = 'contents'
      document
        .querySelectorAll('.team-one button, .team-two button')
        .forEach(button => (button.disabled = true))
    } else if (teamTwoPoints === 21) {
      document.querySelector('section + section .hide').style.display =
        'contents'
      document
        .querySelectorAll('.team-one button, .team-two button')
        .forEach(button => (button.disabled = true))
    }
  }

  const resetGame = () => {
    teamOnePoints = 0
    teamTwoPoints = 0
    document.querySelector('.team-one h3').innerHTML = 0
    document.querySelector('.team-two h3').innerHTML = 0
    document.querySelector('.team-one .hide').style.display = 'none'
    document.querySelector('.team-two .hide').style.display = 'none'
    document
      .querySelectorAll('.team-one button, .team-two button')
      .forEach(button => (button.disabled = false))
    document.querySelector('section h2').innerHTML = 'House 1'
    document.querySelector('section + section h2').innerHTML = 'House 2'
  }

  const resetButton = document.querySelector('.reset button')
  resetButton.addEventListener('click', resetGame)

  // Team One Add/Sub Points

  const teamOneAddPoint = () => {
    if (teamOnePoints < 21) {
      teamOnePoints++
    } else {
      teamOnePoints = 0
    }
    const teamOneScore = document.querySelector('h3')
    teamOneScore.textContent = teamOnePoints
    declareWinner()
  }
  const teamOneAddButton = document.querySelector('fieldset + fieldset button')
  teamOneAddButton.addEventListener('click', teamOneAddPoint)

  const teamOneSubPoint = () => {
    if (teamOnePoints > 0) {
      teamOnePoints--
    } else {
      teamOnePoints = 0
    }
    const teamOneScore = document.querySelector('h3')
    teamOneScore.textContent = teamOnePoints
  }
  const teamOneSubButton = document.querySelector('.teamOne-sub-button')
  teamOneSubButton.addEventListener('click', teamOneSubPoint)

  // Team Two Add/Sub Points

  const teamTwoAddPoint = () => {
    if (teamTwoPoints < 21) {
      teamTwoPoints++
    } else {
      teamTwoPoints = 0
    }
    const teamTwoScore = document.querySelector('section + section h3')
    teamTwoScore.textContent = teamTwoPoints
    declareWinner()
  }
  const teamTwoAddButton = document.querySelector('.teamTwo-add-button')
  teamTwoAddButton.addEventListener('click', teamTwoAddPoint)

  const teamTwoSubPoint = () => {
    if (teamTwoPoints > 0) {
      teamTwoPoints--
    } else {
      teamTwoPoints = 0
    }
    const teamTwoScore = document.querySelector('section + section h3')
    teamTwoScore.textContent = teamTwoPoints
  }
  const teamTwoSubButton = document.querySelector('.teamTwo-sub-button')
  teamTwoSubButton.addEventListener('click', teamTwoSubPoint)

  // Team One Update Name

  const updateTeamOneName = () => {
    const newTeamOneName = document.querySelector('section input')
    const newTeamOneNameHeader = document.querySelector('section h2')
    newTeamOneNameHeader.textContent = newTeamOneName.value
    newTeamOneName.value = ''
  }
  const teamOneNameUpdateButton = document.querySelector(
    'section fieldset button'
  )
  teamOneNameUpdateButton.addEventListener('click', updateTeamOneName)

  // Team Two Update Name

  const updateTeamTwoName = () => {
    const newTeamTwoName = document.querySelector('section + section input')
    const newTeamTwoNameHeader = document.querySelector('section + section h2')
    newTeamTwoNameHeader.textContent = newTeamTwoName.value
    newTeamTwoName.value = ''
  }
  const teamTwoNameUpdateButton = document.querySelector('.team-two-update')
  teamTwoNameUpdateButton.addEventListener('click', updateTeamTwoName)
}
document.addEventListener('DOMContentLoaded', main)
