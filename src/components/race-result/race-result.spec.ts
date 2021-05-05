import { RaceResult } from './race-result';
import { newSpecPage } from '@stencil/core/testing';

describe('race-result', () => {
  describe('normalization', () => {
    it('returns a blank string if the name is undefined', async () => {
      const { rootInstance } = await newSpecPage({
        components: [RaceResult],
        html: '<race-result></race-result>',
      });
      expect(rootInstance.normalize(undefined)).toEqual('');
    });

    it('returns a blank string if the name is null', async () => {
      const { rootInstance } = await newSpecPage({
        components: [RaceResult],
        html: '<race-result></race-result>',
      });
      expect(rootInstance.normalize(null)).toEqual('');
    });

    it('capitalizes the first letter', async () => {
      const { rootInstance } = await newSpecPage({
        components: [RaceResult],
        html: '<race-result></race-result>',
      });
      expect(rootInstance.normalize('quincy')).toEqual('Quincy');
    });

    it('lower-cases the following letters', async () => {
      const { rootInstance } = await newSpecPage({
        components: [RaceResult],
        html: '<race-result></race-result>',
      });
      expect(rootInstance.normalize('JOSEPH')).toEqual('Joseph');
    });

    it('handles single letter names', async () => {
      const { rootInstance } = await newSpecPage({
        components: [RaceResult],
        html: '<race-result></race-result>',
      });
      expect(rootInstance.normalize('q')).toEqual('Q');
    });
  });
});
