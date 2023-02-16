"use strict"; // Created by ua.lifesheets on 15.02.2023.

/**
  * Завантажує ігровий режим на стороні сервера.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

(async () => {
  await require('./wixcore/nucleus')();
  await require('./wixcore/configs')();
  await require('./wixcore/classes')();
  await require('./wixcore/modules')();
  await require('./wixcore/plugins')();
  await require('./wixcore/staterp')();
})();