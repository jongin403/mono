import { ObjectDiff } from '../../components/ObjectDiff';
import { TextDiff } from '../../components/TextDiff';

export const DiffIndicator = () => {
  return (
    <div>
      DiffIndicator
      <TextDiff />
      <ObjectDiff />
    </div>
  );
};
