import StatisticsService from "../services/statistics-service";
import {RequestHandler} from "express";
import {ResponseMessage} from "../types/messages.types";

export class StatisticsController {

    getMeetingsPerDay: RequestHandler = async (req, res) => {
        let statistics = await StatisticsService.getMeetingsPerDay();
        const response: ResponseMessage = {
            status: 200,
            message: 'success',
            data: {statistics},
        };
        res.status(response.status).json(response);
    }
    getMeetingExistingMonth: RequestHandler = async (req, res) => {
        let statistics = await StatisticsService.getMeetingExistingMonth();
        const response: ResponseMessage = {
            status: 200,
            message: 'success',
            data: {statistics},
        };
        res.status(response.status).json(response);
    }

    getMeetingPercentagePerDay: RequestHandler = async (req, res) => {
        let statistics = await StatisticsService.getMeetingPercentagePerDay();
        const response: ResponseMessage = {
            status: 200,
            message: 'success',
            data: {statistics},
        };
        res.status(response.status).json(response);
    }
}

const statisticsController = new StatisticsController();
export default statisticsController;