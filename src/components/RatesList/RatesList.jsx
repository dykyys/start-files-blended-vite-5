import { Grid, GridItem } from 'components';
import styles from './RatesList.module.css';
export const RatesList = ({ rates }) => {
  return (
    <Grid>
      {rates.map(({ key, value }) => (
        <GridItem key={key}>
          <p className={styles.text}>
            1 {key} = {value}
          </p>
        </GridItem>
      ))}
    </Grid>
  );
};
