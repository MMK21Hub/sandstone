import { Command } from '@commands/Command'
import { command } from '@commands/decorators'

/**
 * Starts or stops a Java Flight Recorder profiling session.
 * @since 21w37a
 */
export class Jfr extends Command {
  /** 
   * Starts a new debug profiling session.
   * Profiling ends when the `debug stop` command is ran, or the world is closed.
   * Fails if there is already a profiling session running.
   */
  @command(['jfr', 'start'], { isRoot: true })
  start = () => {}

  /** 
   * Ends the active JFR profiling session,
   * and saves the profile to a .jfr file in the `<installation>/debug` folder.
   * 
   * **Warning:** Two profiling sessions should not be ended within the same real-life minute,
   * to avoid the .jfr file being overriden ({@link https://bugs.mojang.com/browse/MC-236711}).
   */
  @command(['jfr', 'stop'], { isRoot: true })
  stop = () => {}
}
