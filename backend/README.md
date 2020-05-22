# Portal.API

Scaffold Project Using: .Net Core 3.1, EntityFramework and PostgreSql.

## Installation

Install PostgreSql.

Verify the appsettings.json keys: "FileDestination" and "postgreConnection" in the Portal.Api project.

Install Entity Framework command tools:
```bash
dotnet tool install --global dotnet-ef
```

## Using Migrations

Execute the migration command on Portal.Data directory path. 

Sample:

```bash
dotnet ef --startup-project ../Portal.Api/ migrations add AddAlunoIdColumnToEscola
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.