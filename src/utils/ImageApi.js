class ImageApi {
  #domain;
  constructor({ domain }) {
    this.#domain = domain;
  }

  getPictures = (page = 1, limit = 10) => {
    fetch(`${this.#domain}/v2/list?page=${page};limit=${limit}`).then(
      (response) => {
        return response.json();
      }
    );
  };

  getPictureInfo = (id = 0) => {
    fetch(`https://picsum.photos/id/${id}/info`).then((response) => {
      return response.json();
    });
  };
}

const options = { domain: `https://www.picsum.photos` };

export const imageApi = new ImageApi(options);
