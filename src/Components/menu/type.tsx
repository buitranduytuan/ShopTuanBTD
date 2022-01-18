export type MenuRightProps = {
  handleClickBtnSearch?: (name: string | undefined) => void;
  setFilterFromMenuRight?: (filter: FilterType) => void;
  filter?: FilterType;
};

export type FilterType = {
  name?: String;
  brand?: String;
  page: Number;
  limit?: Number;
};

export type FilterType223333333 = {
  name?: String;
  brand?: String;
  page: Number;
  limit?: Number;
};
