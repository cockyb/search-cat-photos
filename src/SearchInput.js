const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.$searchInput.autofocus = true

    this.$searchInput.className = "SearchInput";

    this.$searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });
    this.$searchInput.addEventListener("click", (e) => {
      e.target.value = ''
    })

    $target.appendChild($searchInput);
    console.log("SearchInput created.", this);
  }
  render() { }
}
