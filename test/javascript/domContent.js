const body = `
    <div
      class="graphs flex flex-col justify-center items-center"
      data-controller="impact-graphs"
      data-impact-graphs-query-value="hello"
    >
      <h1
        class="m-3.5 p-3.5 text-3xl text-white"
        data-impact-graphs-target="title"
      >
        Inject Printer
      </h1>
      <select
        class="p-2.5 w-70 outline-none text-gray-400"
        id="select"
        name="category"
        data-impact-graphs-target="category"
        data-action="change->impact-graphs#handleFilter"
      ></select>
      <div class="flex svg-container mt-10 pt-10 flex-col items-center">
        <svg class="flex items-center" width="400" height="300" id="svg-wrapper">
          <g data-impact-graphs-target="svgBar" transform="translate(20, 0)">
            <line
              id="0"
              x1="75"
              y1="200"
              x2="75"
              class="barchart_line bar-1"
              stroke="#EC422A"
              stroke-width="45"
              data-action="mouseover->impact-graphs#handleBarMouseover
            mouseleave->impact-graphs#handleBarMouseleave"
            />
            <text
              x="75"
              y="250"
              class="bar-legend"
              text-anchor="middle"
              style="fill: white"
              font-size="32px"
            >
              P
            </text>

            <text
              x="75"
              y="12"
              class="tooltip"
              id="tool1"
              text-anchor="middle"
              style="fill: white; z-index: 100"
              font-size="12px"
              data-impact-graphs-target="tooltip"
            >
              45
            </text>
          </g>
          <g data-impact-graphs-target="svgBar" transform="translate(20, 0)">
            <line
              class="barchart_line bar-1"
              x1="150"
              y1="150"
              x2="150"
              y2="127"
              id="1"
              stroke-width="45"
              stroke="#F49A32"
              stroke-width="14"
              data-action="mouseover->impact-graphs#handleBarMouseover
            mouseleave->impact-graphs#handleBarMouseleave"
            />
            <text
              x="150"
              y="250"
              class="bar-legend"
              text-anchor="middle"
              style="fill: white"
              font-size="32px"
            >
              D
            </text>
            <text
              x="150"
              y="12"
              class="tooltip"
              text-anchor="middle"
              style="fill: white; z-index: 100"
              font-size="12px"
              data-impact-graphs-target="tooltip"
            >
              45
            </text>
          </g>
          <g transform="translate(20, 0)" data-impact-graphs-target="svgBar">
            <line
              class="barchart_line bar-1"
              x1="225"
              y1="150"
              x2="225"
              y2="138"
              id="2"
              stroke-width="45"
              stroke="#FFFFFF"
              stroke-width="14"
              data-action="mouseover->impact-graphs#handleBarMouseover
            mouseleave->impact-graphs#handleBarMouseleave"
            />
            <text
              x="225"
              y="250"
              class="bar-legend"
              text-anchor="middle"
              style="fill: white"
              font-size="32px"
            >
              U
            </text>
            <text
              x="225"
              y="12"
              class="tooltip"
              text-anchor="middle"
              style="fill: white; z-index: 100"
              font-size="12px"
              data-impact-graphs-target="tooltip"
            >
              45
            </text>
          </g>
          <g transform="translate(20, 0)" data-impact-graphs-target="svgBar">
            <line
              class="barchart_line bar-1"
              x1="300"
              y1="150"
              x2="300"
              y2="145"
              id="3"
              stroke-width="45"
              stroke="#70F9FC"
              stroke-width="19"
              data-action="mouseover->impact-graphs#handleBarMouseover
            mouseleave->impact-graphs#handleBarMouseleave"
            />
            <text
              style="fill: white"
              font-size="32px"
              x="300"
              y="250"
              class="bar-legend"
              text-anchor="middle"
            >
              E
            </text>
            <text
              x="300"
              y="12"
              class="tooltip"
              text-anchor="middle"
              style="fill: white; z-index: 100"
              font-size="12px"
              data-impact-graphs-target="tooltip"
            >
              45
            </text>
          </g>
        </svg>
      </div>
    </div>
`;

export default body;
