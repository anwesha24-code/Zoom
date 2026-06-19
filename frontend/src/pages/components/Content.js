import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import VideoCamRoundedIcon from '@mui/icons-material/VideocamRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import { SitemarkIcon } from './CustomIcons';
import './SignInStyle.css'; // Shared layout file

const items = [
  {
    icon: <VideoCamRoundedIcon className="content-icon" />,
    title: 'Crystal Clear HD Quality',
    description:
      'Experience lag-free, ultra-high-definition video and spatial audio that feels like an in-person conversation.',
  },
  {
    icon: <SecurityRoundedIcon className="content-icon" />,
    title: 'Enterprise-Grade Security',
    description:
      'Keep your sensitive discussions confidential with end-to-end encrypted rooms and advanced host controls.',
  },
  {
    icon: <GroupsRoundedIcon className="content-icon" />,
    title: 'Seamless Collaboration',
    description:
      'Share screens, co-annotate, and capture insights automatically with built-in real-time collaboration tools.',
  },
  {
    icon: <LinkRoundedIcon className="content-icon" />,
    title: 'Instant Meeting Codes',
    description:
      'Create or jump into recurring meeting spaces instantly with clean, easy-to-remember room URLs.',
  },
];

export default function Content() {
  return (
    <Stack
      className="content-stack"
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <SitemarkIcon />
      </Box>
      {items.map((item, index) => (
        <Stack key={index} direction="row" className="content-item-row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography variant="body1" className="content-title">
              {item.title}
            </Typography>
            <Typography variant="body2" className="content-description">
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}