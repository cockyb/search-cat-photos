console.log("app is running!");

class App {
  $target = null;
  // data = [];
  constructor($target) {
    this.$target = $target;
    this.data = [];
    if (window.localStorage.getItem('data') === null) {
      window.localStorage.setItem('data', [])
    } else {
      const data = window.localStorage.getItem('data')
      this.data = JSON.parse(data)
    }

    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        this.setState({ data: [], loading: true })
        const { data } = await api.fetchCats(keyword);
        this.setState({ data, loading: false })
        window.localStorage.setItem('data', JSON.stringify(data))

      }
    });

    this.randomButton = new RandomButton({
      $target,
      onClick: async () => {
        this.setState({ data: [], loading: true })
        const { data } = await api.fetchRandomCats()
        this.setState({ data, loading: false })
        window.localStorage.setItem('data', JSON.stringify(data))
      }
    })

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
