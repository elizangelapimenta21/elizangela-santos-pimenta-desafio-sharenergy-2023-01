import { useState, useEffect } from 'react';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { userProps } from '../../interface/user';
import { Image, WrapperPagination, SearchInput } from './style';
import { UsersPagination } from '../Pagination';
import { getUserService } from '../../services/RamdomUser/getUsers';

export function UsersTable() {
    const [users, setUsers] = useState<userProps[]>([]);
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(15);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getProducts = async () => {
            const apiReturn = await getUserService(page);
            if (!apiReturn.error) {
                setUsers(apiReturn);
            }
        };
        getProducts();
    }, [page]);

    const filterUsers = users.filter(
        (user) =>
            user.login.username.includes(search) ||
            user.email.includes(search) ||
            user.name.first.includes(search)
    );

    return (
        <>
            <SearchInput
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Foto</TableCell>
                            <TableCell align="right">Nome Completo</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Username</TableCell>
                            <TableCell align="right">Idade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filterUsers.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    <Image src={user.picture.thumbnail} />
                                </TableCell>
                                <TableCell align="right">
                                    {user.name.first}
                                    <p>{user.name.last}</p>
                                </TableCell>
                                <TableCell align="right">
                                    {user.email}
                                </TableCell>
                                <TableCell align="right">
                                    {user.login.username}
                                </TableCell>
                                <TableCell align="right">
                                    {user.dob.age}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <WrapperPagination>
                <UsersPagination pageNumber={numberOfPages} setPage={setPage} />
            </WrapperPagination>
        </>
    );
}
