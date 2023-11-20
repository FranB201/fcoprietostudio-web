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
        { title: "Cuádriceps de acero", description: "Descripción breve del video 1.", category: "Piernas", thumbnail: VideoImg1 },
        { title: "Sentadilla, técnica perfecta", description: "", category: "Piernas", thumbnail: VideoImg2 },
        { title: "Femoral", description: "Descripción breve del video 3.", category: "Categoría 1", thumbnail: VideoImg3 },
        { title: "Peso muerto", description: "Ejecuta un levantamiento perfecto y aplicalo en tu día a día.", category: "Piernas", thumbnail: VideoImg4 },
        { title: "Reto de resistencia", description: "Ponte a prueba y admira tus progresos.", category: "Retos", thumbnail: VideoImg5 },
        { title: "Zancadas", description: "No te imaginas cuantos musculos estas trabajando.", category: "Piernas", thumbnail: VideoImg1 },
    ];

    return (
        <HomeLayout>
            <div className="startRadial">
                <div className="row">
                    <div className="pt-5 background-sections-nutrition">
                        <h2>Entrenamientos</h2>
             {/*            <div className="centered-content">
                            <h3>Eleva tu entrenamiento con nuestras guías en video</h3>
                        </div> */}
                    </div>
                </div>
                <div className="px-5" style={{ position: 'relative' }}>
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
                                            <Typography variant="body2" color="text.secondary">
                                                {video.category}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <ComingSoonVideos />
                </div>
            </div>
        </HomeLayout>
    );
}
