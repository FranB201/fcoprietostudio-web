import { Route, Routes, Navigate } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { NutritionPage } from "../pages/NutritionPage";
import { StudiosTrainings } from "../pages/StudiosTrainings";
import { ChallengesPage } from "../pages/ChallengesPage";
import { VideosTrainingPage } from "../pages/VideosTrainingPage";
import { InfoContactPage } from "../pages/InfoContactPage";


export const HomeRoutes = () => {
  return (

        <Routes>

            <Route path="/" element={ <HomePage/> } />

            <Route path="/nutricion" element={ <NutritionPage/> } />

            <Route path="/studiotrainings" element={ <StudiosTrainings/> } />

            <Route path="/videostrainings" element={ <VideosTrainingPage/> } />

            <Route path="/challengesPage" element={ <ChallengesPage/> } />

            <Route path="/InfoContact" element={ <InfoContactPage/> } />
            
            <Route path="/*" element={ <Navigate to="/" /> } />

        </Routes>

    )
}
