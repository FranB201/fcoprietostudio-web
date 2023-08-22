import { Route, Routes, Navigate } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { NutritionPage } from "../pages/NutritionPage";
import { StudiosTrainings } from "../pages/StudiosTrainings";
import { ChallengesPage } from "../pages/ChallengesPage";
import { VideosTrainingPage } from "../pages/VideosTrainingPage";
import { InfoContactPage } from "../pages/InfoContactPage";
import { LoginPage } from "../pages/LoginPage";


export const HomeRoutes = () => {
  return (

        <Routes>

            <Route path="/" element={ <HomePage/> } />

            <Route path="/nutricion" element={ <NutritionPage/> } />

            <Route path="/studiotrainings" element={ <StudiosTrainings/> } />

            <Route path="/videostrainings" element={ <VideosTrainingPage/> } />

            <Route path="/challengesPage" element={ <ChallengesPage/> } />

            <Route path="/InfoContact" element={ <InfoContactPage/> } />

            <Route path="/login" element={ <LoginPage/> } />
            
            <Route path="/*" element={ <Navigate to="/" /> } />

        </Routes>

    )
}
