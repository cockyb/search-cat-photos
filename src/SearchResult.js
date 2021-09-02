class SearchResult {
  // $searchResult = null;
  // data = null;
  // onClick = null;
  // loading = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData.data;
    this.onClick = onClick;
    this.loading = initialData.loading

    this.render();
  }

  setState(nextData) {
    this.data = nextData.data;
    this.loading = nextData.loading
    this.render();
  }

  render() {
    console.log(this.data);
    this.$searchResult.innerHTML = this.loading ?
      `<div>
        loading...
      </div>`
      :
      this.data.length === 0 ?
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
