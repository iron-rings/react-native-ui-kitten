import React from 'react';
import { StyleSheet } from 'react-native';
import { ProgressBar } from '@ui-kitten/components';

let timeoutId;
const getRandomNum = (min: number, max: number): number => Math.random() * (max - min) + min;

export const ProgressBarThemingShowcase = () => {
  const [ progress, setProgress ] = React.useState(0);

  React.useEffect(() => {
    timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);

      if (progress < 1) {
        const load = getRandomNum(0.1, 0.4);
        setProgress(progress + load);
      } else {
        setProgress(0);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [ progress ]);

  return (
    <ProgressBar
      style={styles.bar}
      progress={progress} />
  );
};

const styles = StyleSheet.create({
  bar: {
    width: 200,
  },
});