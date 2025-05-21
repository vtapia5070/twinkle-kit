export default function (plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'ComponentName',
        message: 'What is the component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        // Path for the new file
        path: 'lib/components/{{ComponentName}}/{{ComponentName}}.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'lib/components/{{ComponentName}}/{{ComponentName}}.test.tsx',
        templateFile: 'plop-templates/Component.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'lib/components/{{ComponentName}}/{{ComponentName}}.stories.tsx',
        templateFile: 'plop-templates/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'lib/components/{{ComponentName}}/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
    ],
  });
}
