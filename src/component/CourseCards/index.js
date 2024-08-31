import React from 'react';
import { Box, Card, CardActionArea, CardContent, Typography, Chip, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './index.css';

const CourseCards = () => {
  const courses = [
    {
      title: 'Become a successful data engineer',
      date: '24th sep 2024',
      image: 'https://th.bing.com/th/id/OIP.b_otneFObjG14QBUscb9fgHaEK?rs=1&pid=ImgDetMain',
      link: '',
      backgroundClass: 'card-1',

    },
    {
      title: 'Become a Successful Data Scientist',
      date: '24th sep 2024',
      image: 'https://coursevita-main-site.s3.eu-north-1.amazonaws.com/courseImages/dataScience.webp',
      link: 'https://coursevita.com/courses/dataScience',
      backgroundClass: 'card-2',

    },
    {
      title: 'Become a successful data Analyst',
      date: '24th sep 2024',
      image: 'https://coursevita-main-site.s3.eu-north-1.amazonaws.com/courseImages/Rectangle.webp',
      link: 'https://coursevita.com/courses/dataAnalytics',
      backgroundClass: 'card-3'

    },
    {
      title: 'Become a successful data visualization expert',
      date: '24th sep 2024',
      image: 'https://coursevita-main-site.s3.eu-north-1.amazonaws.com/courseImages/dataVisualization.webp',
      link: 'https://coursevita.com/courses/dataVisualization',
      backgroundClass: 'card-4'

    },
    {
      title: 'Python for Data Analytics',
      date: '24th sep 2024',
      image: 'https://th.bing.com/th/id/OIP.RwZy-DttUnfoxoABhQMWqQAAAA?rs=1&pid=ImgDetMain',
      link: 'https://upskill.coursevita.com/python-data-analytics',
      backgroundClass: 'card-5'

    },
  ];

  return (
    <Box className="scroll-container">
      {courses.map((course, index) => (
        <Card key={index} className={`course-card ${course.backgroundClass}`}>
          <CardActionArea href={course.link || '#'}>
            <CardContent className="card-content">
                <div className='start-sec'>
                    <Box 
                        component="img"
                        src={course.image}
                        alt={course.title}
                        className="card-image"
                    />
                    <Box className="card-details">
                        <Chip label="Upcoming" className="status-chip" />
                    </Box>

                </div>
                <Typography variant="h6" className="card-title">
                  {course.title}
                    </Typography>
                <div className='last-sec'> 

                    {course.date && (
                    <Typography variant="body2" color="textSecondary" className="card-date">
                        <CalendarTodayIcon className="calendar-icon" /> {course.date}
                    </Typography>
                    )}
                    <IconButton className="arrow-button" aria-label="Go to course">
                        <ArrowForwardIcon />
                    </IconButton>
                </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default CourseCards;
