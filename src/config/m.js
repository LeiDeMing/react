import { StyleSheet, css } from 'aphrodite';
import { spaceInLeft } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: spaceInLeft,
        animationDuration: '.6s'
    }
});

export const m=css(styles.magic);