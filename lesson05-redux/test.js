const fn = props => {
  const { list } = props;
  console.log(list, props);
};

fn({ list: [1, 2, 3], prop1: 'prop1', prop2: 'prop2' });
