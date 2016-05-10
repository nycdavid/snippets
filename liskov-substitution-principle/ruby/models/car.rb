require_relative "./vehicle"

class Car < Vehicle
  def turn_on_ac
    $stdout.puts "Whew it's chilly..."
  end
end
