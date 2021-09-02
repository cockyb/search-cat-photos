class App {
  constructor($target) {
    this.$target = $target;
    this.state = {
      data: [],
      isLoading: null
    }

    if (window.localStorage.getItem('data') === null) {
      window.localStorage.setItem('data', [])
    } else {
      const localData = window.localStorage.getItem('data')
      this.state.data = JSON.parse(localData)
    }

    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        this.setState({ data: [], isLoading: true })
        const { data } = await api.fetchCats(keyword);
        this.setState({ data, isLoading: false })
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
      initialState: this.state,
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

  setState(newState) {
    console.log(newState);
    this.state = newState;
    this.searchResult.setState(newState);
  }
}
