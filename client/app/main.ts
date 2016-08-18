import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

browserDynamicPlatform().bootstrapModule(AppModule)
    .catch((err: any) => console.error('error @bootstrap: ', err));;