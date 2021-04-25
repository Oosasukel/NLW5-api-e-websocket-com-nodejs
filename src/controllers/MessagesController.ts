import { Request, Response } from 'express';
import { MessagesService } from '../services/MessagesService';
import { SettingsService } from '../services/SettingsService';

class MessagesController {
  async create(request: Request, response: Response) {
    const { user_id, admin_id, text } = request.body;

    const messagesService = new MessagesService();

    const message = await messagesService.create({ user_id, admin_id, text });

    return response.json(message);
  }

  async showByUser(request: Request, response: Response) {
    const { id } = request.params;

    const messagesService = new MessagesService();

    const list = await messagesService.listByUser(id);

    return response.json(list);
  }
}

export { MessagesController };
