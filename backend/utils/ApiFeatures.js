class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    if (this.queryString.keyword) {
      this.query = this.query.find({
        $text: { $search: this.queryString.keyword }
      });
    }
    return this;
  }

  filter() {
    const filters = { ...this.queryString };
    ["keyword", "page", "limit", "sort", "fields"].forEach(k => delete filters[k]);

    if (filters.category) this.query = this.query.find({ category: filters.category });
    if (filters.brand) this.query = this.query.find({ brand: filters.brand });

    if (filters.minPrice || filters.maxPrice) {
      this.query = this.query.find({
        price: {
          ...(filters.minPrice ? { $gte: Number(filters.minPrice) } : {}),
          ...(filters.maxPrice ? { $lte: Number(filters.maxPrice) } : {})
        }
      });
    }

    return this;
  }

  sort() {
    const sortBy = this.queryString.sort
      ? this.queryString.sort.split(",").join(" ")
      : "-createdAt";
    this.query = this.query.sort(sortBy);
    return this;
  }

  limitFields() {
    const fields = this.queryString.fields
      ? this.queryString.fields.split(",").join(" ")
      : "-__v";
    this.query = this.query.select(fields);
    return this;
  }

  paginate() {
    const page = Number(this.queryString.page) || 1;
    const limit = Number(this.queryString.limit) || 12;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

export default ApiFeatures;
