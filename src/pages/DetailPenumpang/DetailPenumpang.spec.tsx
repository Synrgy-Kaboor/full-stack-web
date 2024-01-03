import { afterEach, describe, expect, it } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import DetailPenumpang from './DetailPenumpang';

describe('Halaman Detail Penumpang', () => {
    afterEach(() => {
        cleanup();
    });

    it('renders correctly', () => {
        render(
            <DetailPenumpang/>
        );

        expect(screen.queryByText('Detail Penumpang')).not.toBeNull();
    });
});