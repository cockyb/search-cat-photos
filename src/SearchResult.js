class SearchResult {
  constructor({ $target, initialState, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";

    this.data = initialState.data;
    this.loading = initialState.loading
    this.onClick = onClick;

    $target.appendChild(this.$searchResult);
    this.render();
  }

  setState(newState) {
    this.data = newState.data;
    this.loading = newState.loading
    this.render();
  }

  render() {
    this.$searchResult.innerHTML = this.loading ?
      `<div>
        loading...
      </div>`
      :
      this.data.length === 0 || this.data === null ?
        `<div>
          검색결과가 없습니다.
        </div>`
        :
        this.data.map(
          cat => `
          <div class="item">
            <img src=${cat.url} alt=${cat.name} />
          </div>
        `
        )
          .join("");

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
    });
  }
}
