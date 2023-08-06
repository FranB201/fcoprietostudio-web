import { HomeLayout } from "../layout/HomeLayout"
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import VideoImg1 from "../../../src/assets/VideoImages/VideoImg1.png";
import VideoImg2 from "../../../src/assets/VideoImages/VideoImg2.png";
import VideoImg3 from "../../../src/assets/VideoImages/VideoImg3.png";
import VideoImg4 from "../../../src/assets/VideoImages/VideoImg4.png";
import VideoImg5 from "../../../src/assets/VideoImages/VideoImg5.png";
import { ComingSoonVideos } from "../components";

export const VideosTrainingPage = () => {

    const videos = [
        { title: "Video 1", description: "Descripción breve del video 1.", thumbnail: VideoImg1 },
        { title: "Video 2", description: "Descripción breve del video 2.", thumbnail: VideoImg2 },
        { title: "Video 3", description: "Descripción breve del video 3.", thumbnail: VideoImg3 },
        { title: "Video 4", description: "Descripción breve del video 3.", thumbnail: VideoImg4 },
        { title: "Video 5", description: "Descripción breve del video 3.", thumbnail: VideoImg5 },
        { title: "Video 6", description: "Descripción breve del video 3.", thumbnail: VideoImg1 },
    ];

    return (
        <HomeLayout>
            <div className="startRadial">
                <div className="row pb-5">
                    <div className="pt-5 background-sections-nutrition">
                        <h2>Entrenamientos</h2>
                        <div className="centered-content">
                            <h3>Eleva Tu Entrenamiento con Nuestras Guías en Video</h3>
                        </div>
                    </div>
                </div>
                <div className="p-5"  style={{ position: 'relative' }}>
                    <Grid container spacing={5}>
                        {videos.map((video, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card>
                                    <CardActionArea href="/link/to/video">
                                        <CardMedia
                                            component="img"
                                            height="320"
                                            image={video.thumbnail}
                                            alt="video thumbnail"
                                        />
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                {video.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {video.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <ComingSoonVideos/>
                </div>
            </div>
        </HomeLayout>
    );
}
