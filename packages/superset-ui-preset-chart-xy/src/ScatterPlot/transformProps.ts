/* eslint-disable sort-keys */

import { pick } from 'lodash';
import { ChartProps } from '@superset-ui/chart';
import { HookProps } from './ScatterPlot';

export default function transformProps(chartProps: ChartProps) {
  const { width, height, formData, payload } = chartProps;
  const { encoding, margin, theme } = formData;
  const { data } = payload;
  const hooks = chartProps.hooks as HookProps;

  const fieldsFromHooks: (keyof HookProps)[] = [
    'TooltipRenderer',
    'LegendRenderer',
    'LegendGroupRenderer',
    'LegendItemRenderer',
    'LegendItemMarkRenderer',
    'LegendItemLabelRenderer',
  ];

  return {
    data,
    width,
    height,
    encoding,
    margin,
    theme,
    ...pick(hooks, fieldsFromHooks),
  };
}
