import { afterEach, describe, it } from 'vitest';
import { render, cleanup } from '@testing-library/react';

describe('Halaman Detail Penumpang', () => {
    afterEach(() => {
        cleanup();
    });

    it('renders correctly', () => {
        render(
            <h1>Hello World</h1>
        );
    });
});