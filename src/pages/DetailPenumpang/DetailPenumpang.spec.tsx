import { afterEach, describe, expect, it } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import DetailPenumpang from './DetailPenumpang';
import { BrowserRouter } from 'react-router-dom';

describe('Halaman Detail Penumpang', () => {
    afterEach(() => {
        cleanup();
    });

    it('renders correctly', () => {
        render(
            <DetailPenumpang/>,
            {
                wrapper: BrowserRouter
            }
        );

        expect(screen.queryByText('Fasilitas Ekstra')).not.toBeNull();
    });
});