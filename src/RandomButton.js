class RandomButton {
  constructor({ $target, onClick }) {
    this.$randomButton = document.createElement("button")
    this.$randomButton.className = 'RandomButton'
    this.$randomButton.innerHTML = `랜덤 고양이`
    this.$randomButton.addEventListener("click", () => {
      onClick()
    })
    $target.appendChild(this.$randomButton);
  }
}