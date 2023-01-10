import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { paginationProps } from '../../interface/pagination';

export function UsersPagination({ pageNumber, setPage }: paginationProps) {
    
    return (
        <Stack>
            <Pagination
                onChange={(e, value) => setPage(value)}
                count={pageNumber}
                color="primary"
                hideNextButton={true}
                hidePrevButton={true}
            />
        </Stack>
    );
}
