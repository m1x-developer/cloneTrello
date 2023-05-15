import React, { useState } from 'react';
import {Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, Box,} from '@mantine/core';
import {
    IconCalendarStats,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconGauge,
    IconHome2, IconLogout, IconSettings, IconSwitchHorizontal,
    IconUser
} from "@tabler/icons";
import {Outlet} from "react-router-dom";


const useStyles = createStyles((theme) => ({
    link: {
        width: '50px',
        height: '50px',
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    active: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

interface NavbarLinkProps {
    icon: React.FC<any>;
    label: string;
    active?: boolean;
    onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={label} position="right">
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                <Icon size="1.2rem" stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
}

const mockdata = [
    { icon: IconHome2, label: 'Home' },
    { icon: IconGauge, label: 'Dashboard' },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
    { icon: IconCalendarStats, label: 'Releases' },
    { icon: IconUser, label: 'Account' },
    { icon: IconFingerprint, label: 'Security' },
    { icon: IconSettings, label: 'Settings' },
];

export const MainLayout = () => {
    const [active, setActive] = useState(2);

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
       <>
        <Box sx={{display:'flex',}}>
            <Navbar height={'100vh'} width={{ base: 80 }} p="md">
                <Center>
                    logo
                </Center>
                <Navbar.Section grow mt={50}>
                    <Stack justify="center" spacing={0}>
                        {links}
                    </Stack>
                </Navbar.Section>
                <Navbar.Section>
                    <Stack justify="center" spacing={0}>
                        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
                        <NavbarLink icon={IconLogout} label="Logout" />
                    </Stack>
                </Navbar.Section>
            </Navbar>
            <Outlet/>
        </Box>
       </>

    );
}
