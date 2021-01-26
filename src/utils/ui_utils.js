const uiUtils = () => {
  const scaleHeightRatio = (maxHeight, viewportHeight) => {
    if (maxHeight > viewportHeight) {
      const ratio = viewportHeight / maxHeight;
      return Math.round(ratio * 100) / 100;
    }
    return 1;
  };

  const aspectRatio = (hmax, vh) => vh / hmax;

  const calcViewportHeight = (parentElement) =>
    Number(parentElement.getAttribute('height'));

  const renderDropdownItems = (category, parent) => {
    category.map((query) => {
      const options = document.createElement('option');
      options.value = query;
      options.innerText = query;
      parent.appendChild(options);
    });
  };

  const drawBars = (filteredData, tooltipsArr, svgBarsArr) => {
    const maxHeight = Math.max(...Object.values(filteredData));
    const viewportParent = svgBarsArr[0].parentElement;
    const viewportHeight = calcViewportHeight(viewportParent);

    // O(n)
    if (filteredData) {
      Object.keys(filteredData).forEach((value, counter) => {
        const currentBar = svgBarsArr[counter].childNodes[1];
        // eslint-disable-next-line no-use-before-define
        const newHeight = calcHeight(value, maxHeight, viewportParent);

        // plot the two points of the stroke --> x is constant
        currentBar.setAttribute('y2', newHeight + 15);
        currentBar.setAttribute('y1', viewportHeight - 100);

        // update tooltips
        tooltipsArr[counter].setAttribute('y', newHeight + 10);
        // eslint-disable-next-line no-param-reassign
        tooltipsArr[counter].innerHTML = value;
        // eslint-disable-next-line no-param-reassign
        tooltipsArr[counter].style.display = 'none';
      });
    }
  };

  const calcHeight = (height, maxHeight, parentElement) => {
    const viewportHeight = calcViewportHeight(parentElement) - 115;
    const scaleDownRatio = scaleHeightRatio(maxHeight, viewportHeight);
    const trimHeight = height * scaleDownRatio;

    return (
      viewportHeight -
      trimHeight * aspectRatio(maxHeight * scaleDownRatio, viewportHeight)
    );
  };

  return {
    calcHeight,
    calcViewportHeight,
    drawBars,
    renderDropdownItems,
  };
};

export default uiUtils();
