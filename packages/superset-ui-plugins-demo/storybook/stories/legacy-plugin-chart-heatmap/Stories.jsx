/* eslint-disable sort-keys, no-magic-numbers */
import React from 'react';
import { SuperChart } from '@superset-ui/chart';

const DATA = [
  {
    x: 'Energy',
    y: 'Electricity and heat',
    v: 24.9,
    perc: 1.0,
    rank: 1.0,
  },
  {
    x: 'Energy',
    y: 'Industry',
    v: 14.7,
    perc: 0.5887096774193549,
    rank: 0.9882352941176471,
  },
  {
    x: 'Energy',
    y: 'Transportation',
    v: 14.3,
    perc: 0.5725806451612905,
    rank: 0.9764705882352941,
  },
  {
    x: 'Deforestation',
    y: 'Carbon Dioxide',
    v: 10.9,
    perc: 0.435483870967742,
    rank: 0.9588235294117647,
  },
  {
    x: 'Land Use Change',
    y: 'Deforestation',
    v: 10.9,
    perc: 0.435483870967742,
    rank: 0.9588235294117647,
  },
  {
    x: 'Road',
    y: 'Carbon Dioxide',
    v: 10.5,
    perc: 0.4193548387096775,
    rank: 0.9352941176470588,
  },
  {
    x: 'Transportation',
    y: 'Road',
    v: 10.5,
    perc: 0.4193548387096775,
    rank: 0.9352941176470588,
  },
  {
    x: 'Residential Buildings',
    y: 'Carbon Dioxide',
    v: 10.2,
    perc: 0.40725806451612906,
    rank: 0.9176470588235294,
  },
  {
    x: 'Energy',
    y: 'Other Fuel Combustion',
    v: 8.6,
    perc: 0.342741935483871,
    rank: 0.9058823529411765,
  },
  {
    x: 'Other Industry',
    y: 'Carbon Dioxide',
    v: 6.6,
    perc: 0.26209677419354843,
    rank: 0.8941176470588236,
  },
  {
    x: 'Commercial Buildings',
    y: 'Carbon Dioxide',
    v: 6.3,
    perc: 0.25000000000000006,
    rank: 0.8823529411764706,
  },
  {
    x: 'Agriculture',
    y: 'Livestock and Manure',
    v: 5.4,
    perc: 0.2137096774193549,
    rank: 0.8705882352941177,
  },
  {
    x: 'Agriculture',
    y: 'Agriculture Soils',
    v: 5.2,
    perc: 0.20564516129032262,
    rank: 0.8470588235294118,
  },
  {
    x: 'Agriculture Soils',
    y: 'Nitrous Oxide',
    v: 5.2,
    perc: 0.20564516129032262,
    rank: 0.8470588235294118,
  },
  {
    x: 'Oil and Gas Processing',
    y: 'Methane',
    v: 2.8,
    perc: 0.10887096774193548,
    rank: 0.6705882352941176,
  },
  {
    x: 'Electricity and heat',
    y: 'Other Industry',
    v: 2.7,
    perc: 0.10483870967741937,
    rank: 0.6470588235294118,
  },
  {
    x: 'Rail - Ship and Other Transport',
    y: 'Carbon Dioxide',
    v: 2.5,
    perc: 0.09677419354838711,
    rank: 0.6294117647058823,
  },
  {
    x: 'Transportation',
    y: 'Rail - Ship and Other Transport',
    v: 2.5,
    perc: 0.09677419354838711,
    rank: 0.6294117647058823,
  },
  {
    x: 'Electricity and heat',
    y: 'T and D Losses',
    v: 2.2,
    perc: 0.08467741935483872,
    rank: 0.6058823529411764,
  },
  {
    x: 'T and D Losses',
    y: 'Carbon Dioxide',
    v: 2.2,
    perc: 0.08467741935483872,
    rank: 0.6058823529411764,
  },
  {
    x: 'Electricity and heat',
    y: 'Unallocated Fuel Combustion',
    v: 2.0,
    perc: 0.07661290322580645,
    rank: 0.5882352941176471,
  },
  {
    x: 'Industry',
    y: 'Cement',
    v: 1.9,
    perc: 0.07258064516129033,
    rank: 0.5764705882352941,
  },
  {
    x: 'Other Fuel Combustion',
    y: 'Unallocated Fuel Combustion',
    v: 1.8,
    perc: 0.0685483870967742,
    rank: 0.5647058823529412,
  },
];

export default [
  {
    renderStory: () => (
      <SuperChart
        chartType="heatmap"
        chartProps={{
          formData: {
            allColumnsX: 'source',
            allColumnsY: 'target',
            bottomMargin: 'auto',
            canvasImageRendering: 'pixelated',
            leftMargin: 'auto',
            linearColorScheme: 'blue_white_yellow',
            metric: 'sum__value',
            normalized: false,
            showLegend: true,
            showPerc: true,
            showValues: false,
            sortXAxis: 'alpha_asc',
            sortYAxis: 'alpha_asc',
            xscaleInterval: '1',
            yAxisBounds: [null, null],
            yAxisFormat: '.3s',
            yscaleInterval: '1',
          },
          height: 400,
          payload: {
            data: {
              records: DATA,
              extents: [0.1, 24.9],
            },
          },
          width: 400,
        }}
      />
    ),
    storyName: 'Basic',
    storyPath: 'legacy-|plugin-chart-heatmap|HeatmapChartPlugin',
  },
  {
    renderStory: () => (
      <SuperChart
        chartType="heatmap"
        chartProps={{
          formData: {
            allColumnsX: 'source',
            allColumnsY: 'target',
            bottomMargin: 'auto',
            canvasImageRendering: 'pixelated',
            leftMargin: 'auto',
            linearColorScheme: 'blue_white_yellow',
            metric: 'sum__value',
            normalized: false,
            showLegend: true,
            showPerc: true,
            showValues: false,
            sortXAxis: 'alpha_asc',
            sortYAxis: 'alpha_asc',
            xscaleInterval: '1',
            yAxisBounds: [null, null],
            yAxisFormat: '.3s',
            yscaleInterval: '1',
          },
          height: 400,
          payload: {
            data: {
              records: [
                ...DATA,
                {
                  x: null,
                  y: 'Electricity and heat',
                  v: 25.9,
                  perc: 0.43,
                  rank: 1.0,
                },
              ],
              extents: [0.1, 24.9],
            },
          },
          width: 400,
        }}
      />
    ),
    storyName: 'With Null Data',
    storyPath: 'legacy-|plugin-chart-heatmap|HeatmapChartPlugin',
  },
];
