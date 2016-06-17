<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Persona;
use App\Indicadore;
use App\Regione;
use App\Territorio;
use App\Sectore;
use App\Periodo;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Comando para resetear los id auto_increment.
        // ALTER TABLE tablename AUTO_INCREMENT = 1;
        Model::unguard();

        DB::table('personas')->delete();

        $users = array(
                ['cedula' => '00000000000', 'nombre' => 'Administrador', 'apellido1' => '', 'apellido2' => '', 'tipo' => 'A', 'email' => 'admin', 'contrasena' => md5('admin')]
        );

        // Loop through each user above and create the record for them in the database
        foreach ($users as $user) {
            Persona::create($user);
        }

        Model::reguard();
    }
}
