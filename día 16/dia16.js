function transformTree(tree) {
  if (!tree || tree.length === 0 || tree[0] === null) {
    return null;
  }

  const buildNode = (index) => {
    if (index >= tree.length || tree[index] === null) {
      return null;
    }

    const node = {
      value: tree[index],
      left: buildNode(2 * index + 1),
      right: buildNode(2 * index + 2),
    };

    return node;
  };

  return buildNode(0);
}
