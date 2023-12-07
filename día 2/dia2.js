function manufacture(gifts, materials) {
  return gifts.filter((gift) =>
    [...gift].every((material) => materials.includes(material))
  );
}
