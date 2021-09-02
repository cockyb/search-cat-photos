console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        this.setState({ data: [], loading: true })
        api.fetchCats(keyword).then(({ data }) => this.setState({ data, loading: false }));
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: { data: this.data, loading: null },
      onClick: image => {
        this.imageInfo.setState({
          visible: true,
          image
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData.data;
    this.searchResult.setState(nextData);
  }
}
