initSidebarItems({"attr":[["async_trait","Re-export of [`async_trait::async_trait`]"],["factory_prototype","Macro that implements `relm4::factory::FactoryPrototype` and generates the corresponding widget struct."],["micro_widget","Macro that implements `relm4::MicrosWidgets` and generates the corresponding struct."],["widget","Macro that implements `relm4::Widgets` and generates the corresponding struct."]],"derive":[["Components",""]],"enum":[["MicroComponentError","Errors which might get returned from [`MicroComponent::update_view`] method"]],"fn":[["gtk_application","Returns the application created by [`RelmApp::new`]."],["set_global_css","Sets a custom global stylesheet."],["set_global_css_from_file","Sets a custom global stylesheet from a file."],["spawn_future","Spawns a future on the main thread in the main event loop."]],"macro":[["menu","A macro to create menus."],["new_action_group","Create a new type that implements [`ActionGroupName`]."],["new_stateful_action","Create a new type that implements [`ActionName`] with state and target type."],["new_stateless_action","Create a new type that implements [`ActionName`] without state or target type."],["send","A short macro for conveniently sending messages."],["view","The [`view`] macro allows you to construct your UI easily and cleanly."]],"mod":[["actions","Action utility."],["drawing","Utility to help drawing on a [`gtk::DrawingArea`] in a Relm4 application. Create a [`DrawHandler`], initialize it, and get its context when handling a message (that could be sent from the draw signal)."],["factory","Defines traits and data types used to efficiently generating widgets from collections."],["util","Utility traits for working with GTK widgets."]],"struct":[["AsyncRelmWorker","A [`AsyncRelmWorker`] is like a [`RelmWorker`] but runs the [`AsyncComponentUpdate::update`] function in a tokio `Runtime`."],["MicroComponent","MicroComponent is a small component that lives in their parents model, can be modified from their parents model but at the same time have their own widgets and update function"],["RelmApp","The app that runs the main application. A [`RelmApp`] consists of a model that stores the application state and widgets that represent the UI."],["RelmComponent","A component that can be part of the main application or other components."],["RelmMsgHandler","[`RelmMsgHandler`]s are usually used to run expansive tasks on different threads and report back when they are finished so that their parent components can keep handling UI events in the meantime. For example you could use a [`RelmMsgHandler`] for sending a HTTP request or for copying files."],["RelmWorker","[`RelmWorker`]s are like `RelmComponent`s but they don’t have any widgets."],["Sender","A `Sender` that can be used to send items to the corresponding main context receiver."]],"trait":[["AppUpdate","Define the behavior to update the model of the main app."],["AsyncComponentUpdate","[`ComponentUpdate`] for asynchronous workers and components."],["ComponentUpdate","Define the behavior to initialize and update a component or worker."],["Components","Define how to initialize one or more components."],["MessageHandler","A message handler that can be used in situations where a `RelmWorker` isn’t flexible enough."],["MicroModel","Trait that defines the types associated with model used by [`MicroComponent`]"],["MicroWidgets","Define behavior to turn the data of your [`MicroModel`] into widgets."],["Model","Trait that defines the types associated with the model."],["Widgets","Define behavior to turn the data of you model into widgets."]]});