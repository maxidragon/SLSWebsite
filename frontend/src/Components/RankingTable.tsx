import { useEffect, useState } from "react";

import {
    Link,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import classes from "./RankingTable.module.css";
import { Person } from "../logic/interfaces";
import { t } from "i18next";

const RankingTable = (props: { persons: Person[] }) => {
    const [persons, setPersons] = useState<Person[]>([]);
    useEffect(() => {
        const sortedPersons = [...props.persons];
        sortedPersons.sort((a, b) => b.score - a.score);
        setPersons(sortedPersons);
    }, [props.persons]);
    return (
        <>
            <div className={classes.rankingTable}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('position')}</TableCell>
                            <TableCell>{t('name')}</TableCell>
                            <TableCell>{t('wcaId')}</TableCell>
                            <TableCell>{t('score')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {persons.map((person: Person, position: number) => {
                            if (position > 0 && person.score === persons[position - 1].score) {
                                position = position - 1;
                            }
                            return (
                                <TableRow key={person.competitor.id}>
                                    <TableCell>{position + 1}</TableCell>
                                    <TableCell>
                                        {person.competitor.name}
                                    </TableCell>
                                    <TableCell>
                                        {person.competitor.wcaId && (
                                            <Link
                                                href={`https://worldcubeassociation.org/persons/${person.competitor.wcaId}`}
                                                underline="none"
                                                target="_blank"
                                            >
                                                {person.competitor.wcaId}
                                            </Link>
                                        )}
                                    </TableCell>
                                    <TableCell>{person.score}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};

export default RankingTable;